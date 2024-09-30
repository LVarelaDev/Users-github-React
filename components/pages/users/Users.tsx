"use client";
import { useForm } from "react-hook-form";
import useFetchAndPaginationUser from "./hooks/useFetchAndPaginationUser";
import InputSearch from "@/components/ui/inputs/InputSearch";
import CardUserLoader from "@/components/ui/loaders/users-loaders/CardUserLoader";

const Users = () => {
  const form = useForm();
  const searchValue = form.watch("searchValue");

  const { users, scrollRef } = useFetchAndPaginationUser(searchValue);

  return (
    <div className="flex flex-col flex-1 gap-5 row-start-2 bg-white p-5 shadow-xl rounded-lg border h-screen bg-opacity-80 transition-all ease-in-out">
      <div className="flex justify-between items-center">
        <h1 className="flex-1 font-bold text-xl text-slate-700">
          Busca tu usuario de GitHub
        </h1>
        <div className="flex flex-1 justify-end">
          {users && (
            <InputSearch
              form={form}
              name="searchValue"
              placeholder="Buscar..."
            />
          )}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="grid grid-cols-5 gap-4 h-full px-3 overflow-y-auto custom-scroll"
      >
        {users.map((item) => (
          <div key={item.id}>
            <CardUserLoader user={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
