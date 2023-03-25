import React from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { apartmentDetail } from "../../api/apartment";
import Loading from "../../components/progress/Loading";
import { goodApartmentCreateOne } from "../../api/goodapartment";
import { DatePicker, LocalizationProvider, zhCN } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { getDateTime } from "../../util/useDate";
export default function ApartmentHonour() {
  const navigate = useNavigate();
  const { id } = useParams();
  const apartmentOne = useQuery(["apartmentDetail", id], () =>
    apartmentDetail(id)
  );
  const [form, setForm] = React.useState({});
  const handleSubmit = () => {
    console.log(form);
    goodApartmentCreateOne(form);
    navigate(-1, { replace: true });
  };
  React.useEffect(() => {
    setForm({ ...form, apartment: { id: id } });
  }, []);
  if (apartmentOne.status === "loading") return <Loading />;
  return (
    <Grid container spacing={2} p>
      <Grid item xs={12} md={6} lg={4}>
        <Typography variant="h3">
          {apartmentOne.data.buildingNum}-{apartmentOne.data.roomNum}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography variant="h5">授予优秀寝室称号</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            zhCN.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <DatePicker
            value={dayjs(form.date)}
            onChange={(newValue) => {
              setForm({
                ...form,
                date: getDateTime(newValue),
              });
            }}
            label={"获奖日期"}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.description}
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
          label="备注"
          size="small"
          fullWidth
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
    </Grid>
  );
}
