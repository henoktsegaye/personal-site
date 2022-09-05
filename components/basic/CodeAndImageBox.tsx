import { FC, useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import { Code } from "./code";
import ImageBox from "./imageBox";

type Props = {
    url: string;
    alt?: string;
    limit?: boolean;
    code: string
};

const CodeAndImageBox = ({ url, alt, limit = true, code }:Props) => {
    const [dark, setDark] = useState<boolean>(false);
    const getTheme = () => {
        const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
        if (theme == "dark") {
            setDark(true);
        } else {
            setDark(false);
        }
    }

    useEffect(() => {
        window.addEventListener('storage', () => {
            getTheme()
        });
        getTheme()
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <div style={{
                width: '40%',
            }}>
                <Code className="" dark={!dark} children={code} />
            </div>
            <ImageBox
                url={url}
                alt={alt}
                limit={limit}
            />
        </div>
    )
}
export default CodeAndImageBox