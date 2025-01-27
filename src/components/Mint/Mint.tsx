import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Mint.css";
import { Icon } from "../Icon";

const querySchema = yup.object({
  userName: yup
    .string()
    .required("Is required")
    .matches(/@/, "Username must include the '@' symbol")
    .min(2, "Username must be at least 2 characters long"), // Minimum length
  walletAddress: yup
    .string()
    .required("Is required")
    .length(18, "Wallet address must be exactly 18 characters long") // Exactly 18 characters
    .matches(
      /^[a-zA-Z0-9]*$/,
      "Wallet address must include only letters and numbers"
    ), // Letters and numbers only
});

type QuerySchemaType = yup.InferType<typeof querySchema>;

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
    formState: { errors },
  } = useForm<QuerySchemaType>({
    resolver: yupResolver(querySchema),
  });

  const onSubmit = (data: QuerySchemaType) => {
    console.log("Validated Data:", data);
  };

  return (
    <section className="mint-section">
      <h2 className="mint-title">ARE YOU IN?</h2>
      <Icon name="icon-add-sharp" size={iconSize} />
      <p className="mint-text">
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="input-section">
          <div className="input-container">
            <label className="label-icon">
              <Icon name="icon-icon-username" size={24} />
            </label>
            <input
              {...register("userName")}
              className={`mint-input ${errors.userName ? "input-error" : ""}`}
              placeholder="@username"
              autoComplete="off"
            />
          </div>
          {errors.userName && (
            <p className="error-message">{errors.userName.message}</p>
          )}
        </div>
        <div className="input-section">
          <div className="input-container">
            <label className="label-icon">
              <Icon name="icon-icon-wallet" size={24} />
            </label>
            <input
              {...register("walletAddress")}
              className={`mint-input ${
                errors.walletAddress ? "input-error" : ""
              }`}
              placeholder="Wallet address"
              autoComplete="off"
            />
          </div>
          {errors.walletAddress && (
            <p className="error-message">{errors.walletAddress.message}</p>
          )}
        </div>
        <button
          type="submit"
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
