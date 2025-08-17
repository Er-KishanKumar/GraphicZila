import { useEffect } from "react";

const DocumentTitleHandler = (props) => {

    useEffect(() => {
        document.title = `GraphicZila | ${props.pageTitle}`;
    }, [])

    return(<></>);
}

export default DocumentTitleHandler;