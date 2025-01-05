import { Icon } from "../Icon";
import "./RunningLine.css";

export const RunningLine: React.FC = () => {
  return (
    <section className="section marquee-wrapper">
      <div className="marquee-wrapper__first-half">
        <p>DESTROY STEREOTYPES</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>HAVE NO LIMITS</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>BREAK RULES</p>
        <Icon name="icon-add-sharp" size={36} />
      </div>
      <div className="marquee-wrapper__second-half">
        <p>DESTROY STEREOTYPES</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>HAVE NO LIMITS</p>
        <Icon name="icon-add-sharp" size={36} />
        <p>BREAK RULES</p>
        <Icon name="icon-add-sharp" size={36} />
      </div>
    </section>
  );
};
