import React, { useState } from "react";
import {
  Main,
  ParkImage,
  TableContainer,
} from "../../../../../styles/pages/parks/list-parks/styles";
import App from "../../index";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import { GetServerSideProps } from "next";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../../../services/firebase";
import { IPark, ISpotsProps } from "../../../../../types/Parks";
import { FaCarSide, FaTruck } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { checkSpot } from "../../../../../utils/checkSpot";
import { ISchedule } from "../../../../../types/Schedules";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiMoreVertical } from "react-icons/fi";
import { useTheme } from "styled-components";
interface ParksProps extends IPark {
  totalSpent: number;
  schedulesCount: number;
}

interface IListParkProps {
  parks: ParksProps[];
}

const ListParks = ({ parks }: IListParkProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const fetchSpotIcon = (spot: ISpotsProps) => {
    switch (spot.name) {
      case "car":
        return <FaCarSide size={20} color={checkSpot("car", [], spot)} />;
      case "truck":
        return <FaTruck size={20} color={checkSpot("truck", [], spot)} />;
      case "bike":
        return (
          <RiMotorbikeFill
            size={20}
            color={checkSpot("bike", [], spot)}
            style={{ margin: "0 5px" }}
          />
        );
      default:
        return "";
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <>
      <App />
      <Main>
        <TableContainer>
          <Table size="small">
            <colgroup>
              <col width="10%" />
              <col width="20%" />
              <col width="15%" />
              <col width="5%" />
              <col width="5%" />
              <col width="15%" />
              <col width="10%" />
              <col width="15%" />
              <col width="5%" />
            </colgroup>
            <TableHead>
              <TableCell style={{ textAlign: "center" }}>Foto</TableCell>
              <TableCell style={{ textAlign: "center" }}>Nome</TableCell>
              <TableCell style={{ textAlign: "center" }}>Endereço</TableCell>
              <TableCell style={{ textAlign: "center" }}>Estado</TableCell>
              <TableCell style={{ textAlign: "center" }}>Período</TableCell>
              <TableCell style={{ textAlign: "center" }}>Vagas</TableCell>
              <TableCell style={{ textAlign: "center" }}>
                Reservas feitas
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>Total gasto</TableCell>
              <TableCell style={{ textAlign: "center" }}></TableCell>
            </TableHead>
            <TableBody>
              {parks
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((park) => (
                  <>
                    <TableRow key={park.id}>
                      <TableCell style={{ textAlign: "center" }}>
                        <ParkImage
                          src={park.main_image}
                          alt={park.name}
                          width={"50px"}
                          height={"50px"}
                        />
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {park.name}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {park.address}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {park.state}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {park.period}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {park.spots.map((spot: ISpotsProps) =>
                          fetchSpotIcon(spot)
                        )}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {park.schedulesCount}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        R$ {park.totalSpent}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        <>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <FiMoreVertical
                              size={20}
                              color={theme.colors.title}
                            />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: "20ch",
                              },
                            }}
                          >
                            <MenuItem
                              onClick={handleClose}
                              style={{
                                width: "100%",
                                padding: "4px",
                              }}
                            >
                              Deletar
                            </MenuItem>
                          </Menu>
                        </>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 50, 100]}
            component="div"
            count={parks?.length}
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
export default ListParks;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const q = query(collection(database, "parks"));

  const res = (await getDocs(q)).docs.map(async (doc) => {
    const park = doc.data();

    const q = query(
      collection(database, "schedules"),
      where("park_id", "==", park.id)
    );
    const schedules = (await getDocs(q)).docs.map(
      (doc) => doc.data() as ISchedule
    );

    const totalSpent = schedules.reduce((acc, schedule) => {
      return acc + schedule.total_value;
    }, 0);

    const schedulesCount = schedules.length;

    return {
      ...park,
      totalSpent,
      schedulesCount,
    };
  });

  const parks = await Promise.all(res);

  return {
    props: {
      parks,
    },
  };
};
