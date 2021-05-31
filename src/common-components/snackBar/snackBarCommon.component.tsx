import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

interface Props {
  message: string;
  count: number;
}

export const SnackBarCommon: React.FC<Props> = (props) => {
  const { message, count } = props;
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    setOpen(true);
  }, [count]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      message={message}
    />
  );
};
