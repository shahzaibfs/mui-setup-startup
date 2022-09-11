import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors"

/**
 * @link https://bareynol.github.io/mui-theme-creator/#Buttons
 */

const customTheme = createTheme(
    {
        palette: {
            primary: {
                main: red[800]
            },
            secondary: {
                main: red[800]
            }
        }
    }
)

export default customTheme;