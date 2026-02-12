import { useState, useEffect } from "react";

const Dashboard = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const apiResponse = await fetch("/api/admin/dashboard", {
                credentials: true,
                method: "GET",
            });

            if (!apiResponse.ok) {
                console.log("Error from api");
            }

            const data = await apiResponse.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome Admin, </h1>
            {
                data.map((element, index) => {
                    return (
                        <div className="bg-black m-2 text-center rounded-3xl">
                            <h1>{element.event}</h1>
                            <h1>{element.name}</h1>
                            <h1>{element.USN}</h1>
                            <h1>{element.email}</h1>
                            <h1>{element.department}</h1>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default Dashboard;
