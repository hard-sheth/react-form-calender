# searchinput_dynamic-form

React is a JavaScript library for creating user interfaces. In these library we can create the dynamic form with data of array.

- We can create the Search Input Option at front end side in react js.
- Create Dynamic form with help of array of object

## Installation

Install searchinput_dynamic-form with npm

```bash
 npm install searchinput_dynamic-form
 yarn add searchinput_dynamic-form
```
    
## Documentation

#### Calender Properties

    minDate?: Date;

    maxDate?: Date;

    holidays?: [Holiday];

    icons?: JSX.Element;

    removeParticularDays?: [ParticularDay];

    removeParticularDaysTime?: [String];

    weekendOff: Boolean;

    name?: String;

    onBlur?: any;

    onChange: (event: any) => void;

    ref: (elm: any) => void;

    value?: undefined;

    error?: Boolean;

    showTime: boolean;

    startYear?: number;

    endYear?: number;

    showIcon?: boolean;

    removeTime?: any;

    dateFormat?: string;

    timeIntervals?: number;

    showBottomTime?: boolean;

    excludeTime?: [any];

    timeBreak: string[][];
    
    dateRange?: boolean;
    
    multiDateSelect?: boolean;

```typescript
type Holiday = {
    date: string;
    holidayName: string;
};
```

For the Calender we have used moment library. Where we have declared the above properties which are used for Calender Component. For Calender purpose we have used properties which are used for the Calender.

removeParticularDays: Here we declared  
        0 | 1 | 2 | 3 | 4 | 5 | 6

        
| Prop name | Default Values     | Description                |Example Values
| :-------- | :------- | :------------------------- | :------- 
| minDate | n/a | It should be date string |optional
| maxDate | n/a | It should be date string |optional
|holidays|n/a|From these it is an array where we can pass the holidays.|optional
|dateFormat|n/a|Here We have to pass the date format should dd/MM/YYYY|`DD-MM-YYYY`|
|removeParticularDays|[]|It is optiona Array where value should be between the 0 to 6 where 0 stands Sunday, 1 for Monday and so on...|optional
|weekendOff|n/a(Boolean)|Here we can off the Saturday & Sunday| optional
particlarDayTimes|n/a|Here we have passed the day where we have some other time/ special time for that day of week. For example [6] which stands for Saturday.|optional
removeParticularDaysTime|n/a|likw we ha ve an array where what should be time| [[10:00,13:00],[15:00,18:00]]
|showTime|boolean|Time select shown or not.|false
|startYear|number|End of the year.|1930
|endYear|number|End of the year.|2024
|showIcon|boolean|icon should be displayed or not.|true|
|timeIntervals|number|Where number of time should displayed.|30
|showBottomTime|boolean|at the bottom time should displayed or not.|false|
|timeBreak|string[][]|Time should of week where we have what kind of start & end time.|[[10:00,13:00][15:00,20:00]]
|changeDate|()=>void|It where we can send the promise based on date selected|optional|
|dateRange|boolean|When want to select multiple date from start date to end date all date should be covered at that time|optional|
|multiDateSelect|boolean|When want to select multiple date.|optional|

  
