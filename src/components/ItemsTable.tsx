import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Reward } from "../types/Reward";

type Props = {
  data: Reward[];
};

const ItemsTable = ({ data }: Props) => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Reward>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "rarity",
        header: "Rarity",
        size: 150,
      },
      {
        accessorKey: "chance", //normal accessorKey
        header: "Drop chance",
        size: 200,
      },
      {
        accessorFn: (row) => row.drops.join(", "),
        header: "Drops",
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      sorting: [
        {
          id: "name",
          desc: false,
        },
      ],
    },
  });

  return <MaterialReactTable table={table} />;
};

export default ItemsTable;
