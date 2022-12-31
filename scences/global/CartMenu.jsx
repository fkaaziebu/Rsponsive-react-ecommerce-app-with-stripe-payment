// The necessary imports for the CartMenu
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-materila/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { decreaseCount, IncreaseCount, removeFromCart, setIsCartOpen } from "../../state";
import { useNavigate } from "react-router-dom";

// Custom MUI Box component with specific css properties
const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    });
}