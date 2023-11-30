import { useEffect, useState } from "react";

type DeviceType = "Phone" | "PC";

interface UseDetectDeviceResult {
  device: DeviceType;
}

export const useDetectDevice = (): UseDetectDeviceResult => {
  const [device, setDevice] = useState<DeviceType>("PC");

  useEffect(() => {
    const handle = () => {
      if (
        (window.matchMedia("(pointer:coarse)").matches ||
          window.matchMedia("(pointer:fine)").matches) &&
        window.matchMedia("(hover:none)").matches
      ) {
        setDevice("Phone");
      } else {
        setDevice("PC");
      }
    };

    handle();

    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  return { device };
};
