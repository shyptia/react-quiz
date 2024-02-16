import { useRouter } from "next/router";
import { Select } from "./shared/Select";
import { useQuizStore } from "./utils/store";
import { routesPathnames } from "./routes";

export function GenderPage() {
  const router = useRouter();
  const { setGender } = useQuizStore();

  return (
    <div>
      <h1 className="text-title-3 text-center mb-4 text-grey-40 mb-4">
        What gender do you identify with?
      </h1>
      <p className="text-headline-regular text-center text-grey-200 mb-11">
        Please share how do you identify yourself
      </p>

      <Select
        options={[
          {
            label: "Female",
            value: "female",
            image: "/images/female-gender.png",
          },
          { label: "Male", value: "male", image: "/images/male-gender.png" },
          { label: "Other", value: "other", image: "/images/other-gender.png" },
        ]}
        selectType="single-select-image"
        onSelect={(option) => {
          router.push(routesPathnames.age)
          setGender(option.label);
        }}
      />
    </div>
  );
}
