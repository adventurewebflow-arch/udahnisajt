"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackConversion } from "@/lib/gtag";

type WhatsAppTrackedLinkProps = ComponentPropsWithoutRef<"a">;

export default function WhatsAppTrackedLink(props: WhatsAppTrackedLinkProps) {
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
