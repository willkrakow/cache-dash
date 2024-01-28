'use client'

import { TeamRow } from "@/db/models/Team"
import { DataGrid } from "@mui/x-data-grid"
import { useRouter } from 'next/router';
interface Props {
    teams: TeamRow[]
}
const TeamsTable = ({ teams }: Props) => {
    const router = useRouter();
    return (
        <DataGrid
            rows={teams}
            columns={[
                { field: 'id', headerName: 'ID', width: 100 },
                { field: 'name', headerName: 'Name', width: 200 }, 
                { field: 'city', headerName: 'City', width: 200 }, 
                { field: 'state', headerName: 'State', width: 200 }
            ]}
            onRowClick={(row) => {
                const teamId = row.row.id;
                router.push(`/teams/${teamId}`);
            }}
        />
    )
}

export default TeamsTable