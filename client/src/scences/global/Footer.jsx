import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: {neutral} } = useTheme();

    return (
        <Box marginTop="70px" backgroundColor={neutral.light}>
            <Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexWrap="wrap" rowGap="30px" columnGap="clamp(20px, 30px, 40px)">
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>
                        ECOMMER
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint quisquam consequuntur ratione qui earum? Et doloremque quas quaerat delectus saepe nemo porro, qui, aperiam sunt deleniti maiores voluptatem rerum!
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms and Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms and Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">Contact Us</Typography>
                    <Typography mb="30px">50 north Whatener Blud, Washington DC 10501</Typography>
                    <Typography mb="30px">Email: mredwardroh@gmail.com</Typography>
                    <Typography mb="30px">(222) 333 - 4444</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;