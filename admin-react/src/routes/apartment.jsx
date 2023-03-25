import ApartmentCreate from "../page/apartment/ApartmentCreate";
import ApartmentDetail from "../page/apartment/ApartmentDetail";
import ApartmentHonour from "../page/apartment/ApartmentHonour";
import ApartmentList from "../page/apartment/ApartmentList";
import ApartmentUpdate from "../page/apartment/ApartmentUpdate";

export default {
  path: "apartment",
  children: [
    {
      index: true,
      element: <ApartmentList />,
    },
    {
      path: "create",
      element: <ApartmentCreate />,
    },
    {
      path: ":id",
      children: [
        {
          index: true,
          element: <ApartmentDetail />,
        },
        {
          path: "update",
          element: <ApartmentUpdate />,
        },
        {
          path: "honour",
          element: <ApartmentHonour />,
        },
      ],
    },
  ],
};
