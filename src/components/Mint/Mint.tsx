import { useForm } from "react-hook-form";
import "./Mint.css";
import { Icon } from "../Icon";

type FormData = {
  userName: string;
  walletAddress: string;
};

interface MintProps {
  widthScreen: number;
}

export const Mint: React.FC<MintProps> = ({ widthScreen }) => {
  let iconSize: number = 24;
  if (widthScreen >= 1440) {
    iconSize = 36;
  }
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <section>
      <h2>ARE YOU IN?</h2>
      <Icon name="icon-add-sharp" size={iconSize} />
      <p>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <form onSubmit={onSubmit}>
        <div>
          {" "}
          <label>First Name</label>
          <input {...register("userName")} />
        </div>
        <div>
          {" "}
          <label>Last Name</label>
          <input {...register("walletAddress")} />
        </div>
        <button
          type="button"
          onClick={() => {
            console.log("submit");
          }}
        >
          MINT
        </button>
      </form>
    </section>
  );
};
