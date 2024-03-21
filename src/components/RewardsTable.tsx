import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Reward } from "../types/Relict";

type Data = {
  data: Reward[];
};

const RewardsTable = ({ data }: Data) => {
  const [tableData, setTableData] = useState<Reward[]>([]);
  useEffect(() => {
    setTableData(data);
  }, [data]);  

  const columns = useMemo<MRT_ColumnDef<Reward>[]>(
    () => [
      {
        accessorKey: "item.name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "rarity", //normal accessorKey
        header: "Rarity",
        size: 200,
      },
      {
        accessorKey: "chance",
        header: "Drop Chance",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    initialState: {
      density: "compact",
      pagination: {
        pageSize: 6,
        pageIndex: 0,
      },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default RewardsTable;
