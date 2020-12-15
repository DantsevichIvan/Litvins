import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, MenuItem,} from '@material-ui/core';
import {TextField,} from 'formik-material-ui';
import {DateTimePicker,} from 'formik-material-ui-pickers';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';

type RangeType = {
  value: string;
  label: string;
}

const matchRanges: Array<RangeType> = [
  {
    value: 'home',
    label: 'Home',
  },
  {
    value: 'away',
    label: 'Away',
  }
];

const ourTeemRanges: Array<RangeType> = [
  {
    value: 'litvins',
    label: 'Litvins',
  },
  {
    value: 'litvins_2',
    label: 'Litvins_2',
  }
];

const opposingTeamRanges: Array<RangeType> = [
  {
    value: 'washer',
    label: 'Washer',
  },
  {
    value: 'goldenBall',
    label: 'Golden Ball',
  }
];

const locationRanges: Array<RangeType> = [
  {
    value: 'minsk',
    label: 'Minsk',
  },
  {
    value: 'moscow',
    label: 'Moscow',
  }
];

export const AddNewMatchFormik = () => (
  <Formik
    initialValues={{
      matchDateTime: new Date(),
      matchCondition: 'home',
      ourTeem: 'litvins',
      opposingTeam: 'goldenBall',
      location: 'minsk'
    }}

    onSubmit={(values) => {
      alert(JSON.stringify(values));
      // dispatch(loginTC(values))
    }}
  >
    {({submitForm, isSubmitting}) => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form>
          <Box margin={1}>
            <Field
              component={DateTimePicker}
              name="matchDateTime"
              label="Match date & time"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              name="matchCondition"
              label="Match condition"
              select
              variant="standard"
              helperText="Select match condition"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {matchRanges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </Box>
          <div>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="ourTeem"
                label="Our teem"
                select
                variant="standard"
                helperText="Select our teem"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {ourTeemRanges.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="opposingTeam"
                label="Opposing team"
                // select
                variant="standard"
                helperText="Please select opposing team"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {opposingTeamRanges.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
          </div>
          <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              name="location"
              label="Location"
              select
              variant="standard"
              helperText="Please select location"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {locationRanges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </Box>

          <Box margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Box>
        </Form>
      </MuiPickersUtilsProvider>
    )}
  </Formik>
);
