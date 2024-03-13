import { createWrapperAndAppendToBody } from "@/lib/utils";
import { useLayoutEffect, useState, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface IPortal {
  wrapperId?: string;
}

function Portal({ children, wrapperId = "react-portal-wrapper" }: PropsWithChildren<IPortal>) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
        document.body.style.overflow = "auto";
      }
    };
  }, [wrapperId]);
  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default Portal;
