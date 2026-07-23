import { useEffect, useState } from "react";

import DynamicForm from "../components/wizard/DynamicForm";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";

function Demo() {

    const [form, setForm] = useState(null);

    useEffect(() => {

        async function loadForm() {

            const response = await fetch("http://localhost:5000/api/form");

            const data = await response.json();

            setForm(data);

        }

        loadForm();

    }, []);

    if (!form) {

        return <h2>Loading...</h2>;

    }

    return (

        <>

            <TelemetryPanel />

            <DynamicForm form={form} />

        </>

    );

}

export default Demo;