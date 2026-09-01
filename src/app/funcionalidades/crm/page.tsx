import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/sections/CategoryPageTemplate";
import { featureCategories } from "@/data/features";

const category = featureCategories.find((c) => c.slug === "crm")!;

export const metadata: Metadata = {
  title: category.label,
  description: category.heroDescription,
};

export default function CrmPage() {
  return <CategoryPageTemplate category={category} />;
}
