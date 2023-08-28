import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatLIstItem from "./ChatLIstItem";

function ContactsList() {
  const [allContactsGrouped, setAllContactsGrouped] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchContacts, setSearchContacts] = useState([]);
  const [{}, dispatch] = useStateProvider();

  useEffect(() => {
    const filteredContacts = [];
    Object.values(allContactsGrouped).forEach((userList) => {
      const filteredUserList = userList.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      filteredContacts.push(...filteredUserList);
    });
    setSearchContacts(filteredContacts);
  }, [searchTerm, allContactsGrouped]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(GET_ALL_CONTACTS);
        const usersGroupByInitialLetter = response.data.usersGroupByInitialLetter;
        setAllContactsGrouped(usersGroupByInitialLetter);
      } catch (error) {
        console.log("An error occurred while fetching data:", error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="h-24 flex items-end px-3 py-4">
        <div className="flex items-center gap-12 text-white">
          <BiArrowBack
            className="cursor-pointer text-xl"
            onClick={() => {
              dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
            }}
          />
          <span>New Chat</span>
        </div>
      </div>
      <div className="bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar">
        <div className="flex py-3 items-center gap-3 h-14">
          <div className="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mx-4">
            <div>
              <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-lg" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Contacts"
                className="bg-transparent text-sm focus:outline-none text-white w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        {searchTerm
          ? searchContacts.map((contact) => (
              <ChatLIstItem data={contact} isContactsPage={true} key={contact.id} />
            ))
          : Object.entries(allContactsGrouped).map(([initialLetter, userList]) => (
              <div key={initialLetter}>
                <div className="text-teal-light pl-10 py-5">{initialLetter}</div>
                {userList.map((contact) => (
                  <ChatLIstItem data={contact} isContactsPage={true} key={contact.id} />
                ))}
              </div>
            ))}
      </div>
    </div>
  );
}

export default ContactsList;

