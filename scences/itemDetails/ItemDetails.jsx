import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { useDispatch } from "react-redux";

const ItemDetails = () => {
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useSate(null);
    const [items, setItems] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    async function getItem() {
        const item = await fetch(
            `http://localhost:2000/api/items/${itemId}?populate=image`,
            { method: "GET" }
        );
        const itemJson = await item.json();
        setItem(itemJson.data);
    };

    async function getItems() {
        const items = await fetch(
            `http://localhost:2000/api/items?populate=image`,
            { method: "GET" }
        );
        const itemsJson = await items.json();
        setItems(itemsJson.data);
    };

    useEffect(() => {
        getItem();
        getItems();
    }, [itemId]);
}