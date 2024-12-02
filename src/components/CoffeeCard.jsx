import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ImZoomIn } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";




const CoffeeCard = ({ expresso, coffees, setCoffees }) => {

    const { name, chef, taste, photo, _id } = expresso;
    console.log(name);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        })

    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn btn-neutral join-item"><ImZoomIn /></button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-neutral join-item"><FaEdit /></button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn join-item btn-neutral"><RiDeleteBin5Line /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;