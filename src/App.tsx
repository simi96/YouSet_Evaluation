import { AppBar, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import { theme } from "./theme";
import { TableComponent }  from './components/table';

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Technical Assignment</Typography>
          </Toolbar>
        </AppBar>

        {/* TODO: Add components here */}
        <TableComponent/>
      </div>
    </ThemeProvider>
  );
};
