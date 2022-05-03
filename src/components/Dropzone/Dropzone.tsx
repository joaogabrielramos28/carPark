import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import { useDashboardContext } from "../../contexts/Dashboard";
import { Container, DropZoneWrapper, PreviewZone } from "./styles";

const DropzoneComponent = () => {
  const { setSelectedImages } = useDashboardContext();

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  return (
    <Container>
      <DropZoneWrapper>
        <Dropzone
          maxFiles={5}
          onDrop={onDrop}
          accept={{
            "image/*": [".jpg", ".jpeg", ".png"],
          }}
          multiple
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} multiple />
                <p>
                  <strong>Arraste</strong> as imagens aqui ou clique para
                  selecionar (max 5)
                </p>
              </div>
            </section>
          )}
        </Dropzone>
      </DropZoneWrapper>
    </Container>
  );
};
export default DropzoneComponent;
