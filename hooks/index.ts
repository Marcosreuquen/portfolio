import useSWRImmutable from "swr";
import { contentFetcher } from "lib";
import type { cmd_content_type } from "lib";
import { useEffect } from "react";

const useCMD = (type: cmd_content_type) => {
  const { data, error } = useSWRImmutable(type, contentFetcher);
  return data;
};

export const useServices = () => {
  const content = useCMD("services");

  const assets = content?.includes.Asset;

  const services = content?.items.map((item: any) => {
    const assetId = item.fields.image.sys.id;

    const asset = assets.find((assetItem: any) => {
      const id = assetItem.sys.id;

      if (id === assetId) return true;
    });
    const img = "https:" + asset.fields.file.url;

    return {
      title: item.fields.title,
      content: item.fields.content,
      img,
    };
  });
  return services;
};

export const useProjects = () => {
  const content = useCMD("works");

  const assets = content?.includes.Asset;

  const projects = content?.items.map((item: any) => {
    const assetId = item.fields.imagen.sys.id;

    const asset = assets.find((assetItem: any) => {
      const id = assetItem.sys.id;

      if (id === assetId) return true;
    });
    const img = "https:" + asset.fields.file.url;

    return {
      title: item.fields.titulo,
      content: item.fields.descripcion,
      repository: item.fields.repository,
      web: item.fields.web,
      img,
    };
  });
  return projects;
};

export const useTestimonials = () => {
  const content = useCMD("testimonials");

  const assets = content?.includes.Asset;

  const testimonials = content?.items.map((item: any) => {
    const assetId = item.fields.img.sys.id;

    const asset = assets.find((assetItem: any) => {
      const id = assetItem.sys.id;

      if (id === assetId) return true;
    });
    const img: string = "https:" + asset.fields.file.url;

    return {
      name: item.fields.name,
      quote: item.fields.quote,
      ref: item.fields.ref,
      img,
    };
  });
  return testimonials;
};

export const useAboutMe = () => {
  const content = useCMD("aboutme");

  const item = content?.items[0];

  const aboutme = {
    content: item?.fields.content,
    greetings: item?.fields.greetings,
  };

  return aboutme;
};

export const useApiTest = async () => {
  const res = await (await fetch("/api/hello")).json();
  console.log(res);
  return res;
};
