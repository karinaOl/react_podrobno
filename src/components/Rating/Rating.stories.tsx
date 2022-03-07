import { Story } from "@storybook/react";
import {Rating, RatingProps, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Components/Rating',
    component: Rating
};

const actionCallback = action('rating changed');

const Template: Story<RatingProps> = (args) => <Rating {...args}/>;

export const RatingStar0 = Template.bind({});
RatingStar0.args = {
  value: 0,
  setRatingValue: actionCallback
};

export const RatingStar1 = Template.bind({});
RatingStar1.args = {
  value: 1,
  setRatingValue: actionCallback
};

export const RatingStar2 = Template.bind({});
RatingStar2.args = {
  value: 2,
  setRatingValue: actionCallback
};
export const RatingStar3 = Template.bind({});
RatingStar3.args = {
  value: 3,
  setRatingValue: actionCallback
};
export const RatingStar4 = Template.bind({});
RatingStar4.args = {
  value: 4,
  setRatingValue: actionCallback
};
export const RatingStar5 = Template.bind({});
RatingStar5.args = {
  value: 5,
  setRatingValue: actionCallback
};

export const RatingChanges: Story<RatingProps> = (args) => {

  let[value, setValue] = useState<RatingValueType>(0);

  return(
      <Rating {...args} value={value} setRatingValue={setValue}/>
  );
};