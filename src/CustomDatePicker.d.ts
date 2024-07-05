import { DatePickerProps } from 'react-datepicker';

export type CustomDatePickerProps = DatePickerProps & {
  // Updatable parameters
  minDate?: Date;
  maxDate?: Date;
  holidays?: Holiday[];
  icons?: JSX.Element;
  removeParticularDays?: ParticularDay[];
  particlarDayTimes?: ParticularDay[];
  removeParticularDaysTime?: string[][];
  weekendOff?: boolean;
  name?: string;
  onBlur?: any;
  onChange: (event: any) => void;
  ref?: (elm: any) => void;
  value?: undefined;
  error?: boolean;
  showTime?: boolean;
  startYear?: number;
  endYear?: number;
  showIcon?: boolean;
  removeTime?: any;
  dateFormat?: string;
  timeIntervals?: number;
  showBottomTime?: boolean;
  excludeTime?: any[];
  timeBreak?: string[][];
  changeDate?: (event: any) => void;
  dateRange?: boolean;
  multiDateSelect?: boolean;
  excludeScrollbar?: boolean,
  onSelect?: (date: Date) => void,
  directAccess?: DatePickerProps;
};
type Holiday = {
    date: string;
    holidayName: string;
  };

type ParticularDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

declare const CustomDatePicker: React.ComponentType<CustomDatePickerProps>;

export default CustomDatePicker;