import { FC, Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { JarDefinition } from "picklefinance-core/lib/model/PickleModelJson";

import { classNames } from "v2/utils";
import FarmsTableSpacerRow from "./FarmsTableSpacerRow";
import FarmsTableRowHeader from "./FarmsTableRowHeader";
import FarmsTableRowBody from "./FarmsTableRowBody";

interface Props {
  simple?: boolean;
  jar: JarDefinition;
}

const FarmsTableRow: FC<Props> = ({ jar, simple }) => {
  if (simple)
    return (
      <>
        <tr className="group">
          <FarmsTableRowHeader open={false} simple={simple} jar={jar} />
        </tr>
        <FarmsTableSpacerRow />
      </>
    );

  return (
    <>
      <Disclosure as={Fragment}>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="tr"
              // No hover state when the row is expaned.
              className={classNames(
                !open && "group",
                !simple && "cursor-pointer",
              )}
            >
              <FarmsTableRowHeader open={open} simple={simple} jar={jar} />
            </Disclosure.Button>

            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
            >
              <Disclosure.Panel as="tr">
                <FarmsTableRowBody jar={jar} />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <FarmsTableSpacerRow />
    </>
  );
};

export default FarmsTableRow;
