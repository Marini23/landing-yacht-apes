import { Icon } from "../Icon";
import "./RunningLine.css";

export const RunningLine: React.FC = () => {
  return (
    <section className="section marquee-wrapper">
      <div className="marquee-wrapper__first-half">
        <Icon name="icon-add-sharp" size={36} />
        <p>DESTROY STEREOTYPES</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>HAVE NO LIMITS</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>BREAK RULES</p>
      </div>
      <div className="marquee-wrapper__second-half">
        <Icon name="icon-add-sharp" size={36} />
        <p>DESTROY STEREOTYPES</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>HAVE NO LIMITS</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>BREAK RULES</p>
      </div>
    </section>
  );
};
