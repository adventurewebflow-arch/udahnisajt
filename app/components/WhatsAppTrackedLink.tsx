"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackConversion } from "@/lib/gtag";
import { SHOW_WHATSAPP_LINKS } from "@/lib/contact";

type WhatsAppTrackedLinkProps = ComponentPropsWithoutRef<"a">;

export default function WhatsAppTrackedLink(props: WhatsAppTrackedLinkProps) {
  if (!SHOW_WHATSAPP_LINKS) return null;

  const { onClick, ...rest } = props;

  return (
    <a
      {...rest}
      onClick={(event) => {
        trackConversion("whatsapp");
        onClick?.(event);
      }}
    />
  );
}
