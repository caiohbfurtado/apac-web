import editorialContent from "./home-editorial-content.json";

type HomeEditorialSection<TItem> = {
  section: {
    id: string;
    heading: string;
    description?: string;
  };
  items: TItem[];
};

export type HomeCampaign = {
  slug: string;
  badge: string;
  title: string;
  description: string;
  href: string;
};

export type HomeSponsor = {
  name: string;
  description: string;
  href: string;
  logoLabel: string;
};

export type HomeEditorialContent = {
  campaigns: HomeEditorialSection<HomeCampaign>;
  sponsors: HomeEditorialSection<HomeSponsor>;
};

export const homeEditorialContent = editorialContent as HomeEditorialContent;

export function shouldRenderCampaigns(campaigns: HomeEditorialContent["campaigns"] = homeEditorialContent.campaigns) {
  return campaigns.items.length > 0;
}

export function shouldRenderSponsors(sponsors: HomeEditorialContent["sponsors"] = homeEditorialContent.sponsors) {
  return sponsors.items.length > 0;
}

export const hasCampaigns = shouldRenderCampaigns();
export const hasSponsors = shouldRenderSponsors();
