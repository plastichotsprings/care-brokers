import { useStaticQuery, graphql } from 'gatsby';

export const useQuotesData = () => {
  const { quotesJson } = useStaticQuery(
    graphql`
      query MyQuery {
        dataJson {
          agencyData {
            topic
            quote
          }
          carecomData {
            topic
            quote
          }
        }
      }
    `
  );
  return quotesJson;
};
