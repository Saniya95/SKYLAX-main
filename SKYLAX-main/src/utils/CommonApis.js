import { useApi } from "@/hooks/useApi";
import { apis } from "./apis";
import { useDispatch } from "react-redux";
import { Faqs } from "@/redux/faqReducer";
import { setReviews } from "@/redux/reviewsReducer";

const { Get } = useApi();
const { faqs, testimonials } = apis;

export const CommonApis = () => {
  let dispatch = useDispatch();

  const getFaq = async () => {
    try {
      let data = await Get(faqs);
      if (data?.data?.length) {
        console.log(data?.data, "__faq_data__");
        dispatch(Faqs(data?.data));
      }
    } catch (error) {
      console.log(error, "_error_");
    }
  };

  const getReviews = async () => {
    try {
      let data = await Get(testimonials);
      if (data?.data?.length) {
        console.log(data?.data, "__Reviews_data__");
        dispatch(setReviews(data?.data));
      }
    } catch (error) {
      console.log(error, "_error_");
    }
  };

  return { getFaq, getReviews };
};
