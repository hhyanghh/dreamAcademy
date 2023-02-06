import Card from "@mui/material/Card";
import { CardHeader, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <TodoList />
      <Card
        sx={{
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <CardContent>
          <Box xs={{ display: "flex", justifyContent: "spaceBetween" }}>
            <Button>토글모드</Button>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>All</Button>
              <Button>Active</Button>
              <Button>Completed</Button>
            </ButtonGroup>
          </Box>
        </CardContent>
        <CardContent>body 영역</CardContent>
      </Card>
    </>
  );
}

export default App;
