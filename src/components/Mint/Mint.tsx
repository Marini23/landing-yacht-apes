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
    <section className="mint-section">
      <h2 className="mint-title">ARE YOU IN?</h2>
      <Icon name="icon-add-sharp" size={iconSize} />
      <p className="mint-text">
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <form onSubmit={onSubmit} className="form-wrapper">
        <div className="input-container">
          <label className="label-icon">
            <Icon name="icon-icon-username" size={24} />
          </label>
          <input
            {...register("userName")}
            className="mint-input"
            placeholder="@username"
          />
        </div>
        <div className="input-container">
          <label className="label-icon">
            <Icon name="icon-icon-wallet" size={24} />
          </label>
          <input
            {...register("walletAddress")}
            className="mint-input"
            placeholder="Wallet address"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            console.log("submit");
          }}
          className="mint-button"
        >
          MINT
        </button>
      </form>
    </section>
  );
};
