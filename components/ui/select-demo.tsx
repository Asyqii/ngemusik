import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

type SelectDemoProps = {
  onChange: (value: string) => void;
};

export function SelectDemo({ onChange }: SelectDemoProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Pilih paket" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="5 Jam - Rp. 720.000">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>5 Jam - Rp. 720.000</span>
            </div>
          </SelectItem>
          <SelectItem value="10 Jam - Rp. 1.350.000">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>10 Jam - Rp. 1.350.000</span>
            </div>
          </SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
