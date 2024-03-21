import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Location } from "../types/Relict";

type Data = {
  data: Location[];
};

const LocationTable = ({ data }: Data) => {
  const [tableData, setTableData] = useState<Location[]>([]);
  useEffect(() => {
    setTableData(data);
  }, [data]);

  const columns = useMemo<MRT_ColumnDef<Location>[]>(
    () => [
      {
        accessorKey: "location", //access nested data with dot notation
        header: "Location",
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

export default LocationTable;
