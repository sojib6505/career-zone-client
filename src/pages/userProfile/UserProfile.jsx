import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth"


export default function UserProfile() {
    const { signOutUser } = useAuth()
    const handleSignOut = () => {
        signOutUser().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div>
            <button className="btn btn-primary" onClick={handleSignOut}>SignOut</button>
        </div>
    )
}
