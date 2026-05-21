import editorialContent from "./home-editorial-content.json";

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
  campaigns: {
    section: {
      id: string;
      heading: string;
    };
    items: HomeCampaign[];
  };
  sponsors: {
    section: {
      id: string;
      heading: string;
    };
    items: HomeSponsor[];
  };
};

export const homeEditorialContent = editorialContent as HomeEditorialContent;

export function shouldRenderCampaigns(campaigns: readonly HomeCampaign[] = homeEditorialContent.campaigns.items) {
  return campaigns.length > 0;
}

export function shouldRenderSponsors(sponsors: readonly HomeSponsor[] = homeEditorialContent.sponsors.items) {
  return sponsors.length > 0;
}

export const hasCampaigns = shouldRenderCampaigns();
export const hasSponsors = shouldRenderSponsors();
