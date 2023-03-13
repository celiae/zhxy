import { Button, Grid, IconButton } from "@mui/material";
import React from "react";
import { fileTypes } from "../../constant/fileType";
import { MdPermMedia } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { studentMediaCreateOne } from "../../server/studentmedia";

export default function Media({ media, setMedia }) {
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }
  const updateImageDisplay = (e) => {
    const curFiles = e.target.files;
    if (curFiles.length === 0) {
    } else {
      for (const file of curFiles) {
        if (validFileType(file)) {
          setMedia((files) => [...files, file]);
        } else {
          //文件格式不对
          const para = `File name ${file.name}: Not a valid file type. Update your selection.`;
        }
      }
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input onChange={updateImageDisplay} hidden multiple type="file" />
          <MdPermMedia size={100} />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {media.map((m, index) => {
            const reImage = new RegExp("image", "g");
            const reVideo = new RegExp("video", "g");
            if (reImage.test(m.type)) {
              return (
                <Grid item xs={3} key={index}>
                  <IconButton
                    onClick={() => {
                      setMedia((current) =>
                        current.filter((m, idx) => idx !== index)
                      );
                    }}
                  >
                    <FaWindowClose size={25} />
                  </IconButton>
                  {m.name}
                  <img width={250} src={URL.createObjectURL(m)} />
                  {returnFileSize(m.size)}
                </Grid>
              );
            } else if (reVideo.test(m.type)) {
              return (
                <Grid item xs={3} key={index}>
                  <IconButton>
                    <FaWindowClose size={25} />
                  </IconButton>
                  {m.name}
                  <video controls width={300} src={URL.createObjectURL(m)} />
                  {returnFileSize(m.size)}
                </Grid>
              );
            }
            return <>...</>;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
