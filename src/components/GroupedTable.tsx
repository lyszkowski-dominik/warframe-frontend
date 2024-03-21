import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Relict } from "../types/Relict";

type Data = {
  data: Relict[];
};

const GroupedTable = ({ data }: Data) => {
  const columns = useMemo<MRT_ColumnDef<Relict>[]>(
    () => [
      {
        header: "Type",
        accessorKey: "columnName",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Rewards",
        accessorKey: "rewardsArray",
        filterFn: "contains",
      },
      {
        header: "Location",
        accessorKey: "location",
        filterFn: "contains",
      },
      {
        header: "Rarity",
        accessorKey: "rarity",
      },
      {
        header: "Drop rate",
        accessorKey: "chance",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true,
    initialState: {
      showColumnFilters: true,
      grouping: ["columnName", "name", "rewardsArray"],
      pagination: { pageIndex: 0, pageSize: 20 },
    },
    muiTableContainerProps: { sx: { maxHeight: "800px" } },
  });

  return <MaterialReactTable table={table} />;
};

export default GroupedTable;
