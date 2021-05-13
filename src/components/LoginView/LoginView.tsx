import React, { FunctionComponent, useState } from 'react';
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { Face, Fingerprint, Book } from '@material-ui/icons';
import 'components/LoginView/styles.css';
import { useDispatch } from 'react-redux';
import { updateLoginStatus } from 'store/login/slice';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { updateLectureStartTime } from 'store/lecture/slice';
import { getLectureStartTime } from 'utils/lectureUtils';

const LoginView: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState<string>('');
  const [lectureId, setLectureId] = useState<string>('');

  const handleStudentIdChange: StandardInputProps['onChange'] = (event) => {
    setStudentId(event.target.value);
  };

  const handleLectureIdChange: StandardInputProps['onChange'] = (event) => {
    setLectureId(event.target.value);
  };

  const handleLoginClick = () => {
    dispatch(updateLoginStatus([true, studentId, lectureId]));
    dispatch(updateLectureStartTime(getLectureStartTime(lectureId)));
  };

  return (
    <div className="login-box">
      <div className="login-branding">
        <Typography align="center" color="primary" variant="h3">
          Study Pals
        </Typography>
      </div>
      <Paper>
        <div className="login-box-content">
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item>
              <Book />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                label="Lecture Id"
                type="email"
                value={lectureId}
                onChange={handleLectureIdChange}
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                label="Student Id"
                type="email"
                fullWidth
                value={studentId}
                onChange={handleStudentIdChange}
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField label="Password" type="password" fullWidth required />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: 'none' }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default LoginView;
