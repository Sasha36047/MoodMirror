import { useNavigate } from "react-router-dom";
type Props = { title: string; subtitle: string; to?: string; };
export function SectionHeader({ title, subtitle, to }: Props) {
  const navigate = useNavigate();
  return (
    <div className="section-header">
      <div><h2>{title}</h2><p>{subtitle}</p></div>
      {to ? <button className="view-all-button" onClick={() => navigate(to)}>Смотреть всё</button> : null}
    </div>
  );
}
