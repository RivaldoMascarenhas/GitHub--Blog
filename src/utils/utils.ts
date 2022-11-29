import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
export const formatDate = (date?: string) => {
  if (date) {
    const data = formatDistance(new Date(date), new Date(), {
      locale: ptBR,
      addSuffix: true,
    });
    return data;
  }
};
