import { GetServerSideProps } from "next";
import React from "react";
import App from "..";
import { api } from "../../../../services/api";
import { IListUser } from "../../../../types/Users";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import {
  TableContainer,
  UserImage,
  Main,
  ButtonAdmin,
  ModalContent,
  TitleModal,
  DescriptionModal,
  DecisionWrapper,
  ButtonDecision,
} from "../../../../styles/pages/users/styles";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiOutlineMail,
} from "react-icons/ai";

import { VscOrganization } from "react-icons/vsc";
import { useTheme } from "styled-components";
import { useDashboardContext } from "../../../../contexts/Dashboard";
import { Modal } from "../../../../components";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../../services/firebase";
import { ISchedule } from "../../../../types/Schedules";

const Users = ({ users }: { users: IListUser[] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const theme = useTheme();

  const {
    handleConfirmationAdminPromote,
    adminModalConfirmationIsOpen,
    handleToggleAdminModalConfirmation,
  } = useDashboardContext();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getProviderIcon = (type: string) => {
    switch (type) {
      case "password":
        return <AiOutlineMail size={24} title={type} />;
      case "google.com":
        return <AiFillGoogleCircle size={24} title={type} />;
      case "github.com":
        return <AiFillGithub size={24} title={type} />;
      default:
        return "";
    }
  };

  const getCheckIcon = (type: boolean) => {
    return type ? "✅" : "❌";
  };

  return (
    <>
      <App />
      <Main>
        <TableContainer>
          <Table size="small">
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="15%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="5%" />
              <col width="5%" />
            </colgroup>
            <TableHead>
              <TableCell style={{ textAlign: "center" }}>Foto</TableCell>
              <TableCell style={{ textAlign: "center" }}>E-mail</TableCell>
              <TableCell style={{ textAlign: "center" }}>Nome</TableCell>
              <TableCell style={{ textAlign: "center" }}>Provedor</TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Último acesso
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>Total gasto</TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Desabilitado
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>Verificado</TableCell>
              <TableCell style={{ textAlign: "center" }}>Promover</TableCell>
            </TableHead>
            <TableBody>
              {users
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((user) => (
                  <>
                    <TableRow key={user?.uid}>
                      <TableCell style={{ textAlign: "center" }}>
                        <UserImage
                          src={user?.photoURL}
                          alt={user?.displayName}
                          width={"50px"}
                          height={"50px"}
                        />
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {user?.email}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {user?.displayName}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {getProviderIcon(user?.providerData[0].providerId)}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {user?.metadata.lastSignInTime}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        R$ {user?.totalSpent}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {getCheckIcon(user?.disabled)}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {getCheckIcon(user?.emailVerified)}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        <ButtonAdmin
                          disabled={user?.customClaims?.admin}
                          isAdmin={user?.customClaims?.admin}
                          onClick={() =>
                            handleToggleAdminModalConfirmation(user?.uid)
                          }
                        >
                          <VscOrganization
                            color={
                              user?.customClaims?.admin
                                ? ""
                                : theme.colors.success
                            }
                            size={24}
                          />
                        </ButtonAdmin>
                      </TableCell>
                    </TableRow>
                    {adminModalConfirmationIsOpen && (
                      <Modal onClose={handleToggleAdminModalConfirmation}>
                        <ModalContent>
                          <TitleModal>
                            Deseja realmente promover este usuário para
                            administrador?
                          </TitleModal>
                          <DescriptionModal>
                            Ao transformar esse usuário em ADMIN, ele terá
                            acesso a todas as funcionalidades do sistema.
                          </DescriptionModal>
                          <DecisionWrapper>
                            <ButtonDecision
                              backgroundColor={theme.colors.success}
                              onClick={handleConfirmationAdminPromote}
                            >
                              Sim, desejo continuar
                            </ButtonDecision>
                            <ButtonDecision
                              backgroundColor={theme.colors.secondary}
                              onClick={() =>
                                handleToggleAdminModalConfirmation("")
                              }
                            >
                              Não, desejo cancelar
                            </ButtonDecision>
                          </DecisionWrapper>
                        </ModalContent>
                      </Modal>
                    )}
                  </>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 50, 100]}
            component="div"
            count={users?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Main>
    </>
  );
};
export default Users;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await api.get("/api/users/get-users");

  const { users } = await response.data.users;

  const usersFormatted: IListUser[] = users.map(async (user: IListUser) => {
    const q = query(
      collection(database, "schedules"),
      where("user_id", "==", user.uid)
    );
    const res = (await getDocs(q)).docs.map((doc) => doc.data() as ISchedule);

    const totalSpent = res.reduce((acc, schedule) => {
      return acc + schedule.total_value;
    }, 0);

    return {
      ...user,
      photoURL: user.photoURL || "/user-placeholder.png",
      metadata: {
        lastSignInTime: new Date(
          user.metadata.lastSignInTime
        ).toLocaleDateString(),
      },
      totalSpent,
    };
  });

  const usersFormattedFinal = await Promise.all(usersFormatted);

  return {
    props: { users: usersFormattedFinal },
  };
};
