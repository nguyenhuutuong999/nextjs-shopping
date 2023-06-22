import { useSession } from "next-auth/react";

const Protected = () => {
    const session = useSession();
    return (
        <div>Protected</div>
    )
}
export default Protected;