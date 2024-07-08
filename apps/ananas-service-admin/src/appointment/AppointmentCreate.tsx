import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { MasterClassTitle } from "../masterClass/MasterClassTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="timeslot" source="timeslot" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="masterClass.id"
          reference="MasterClass"
          label="MasterClass"
        >
          <SelectInput optionText={MasterClassTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
