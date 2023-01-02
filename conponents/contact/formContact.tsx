import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useFormik } from 'formik'
import * as yup from 'yup'
import emailjs from "emailjs-com"

const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, 'Name should have minimum 2 letters')
      .required('Name is required'),
    email: yup
      .string().email()
      .min(5, 'kvs name should have minimum 5 letters')
      .required('email is required'),
      phone: yup.number().min(9, 'Phone should have minimum 9 letters'),
      quastion: yup.string().min(30, "Question should have minimum 30 letters").required("Question is required")
  })

import styles from "./style.module.scss";
import { useState } from "react";

const FormConact: NextPage = () => {
    const { t } = useTranslation();

    const [sent, setSent] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [target, setTarget] = useState<any>();


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      quastion: ''
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async () => {
        emailjs.init('c6k6bgB04TtLukx7I');
        console.log("sending", target)
        emailjs.sendForm('artas_id', 'artas', target)
        .then(function() {
            setSent(true);
            setError(false);
        }, function() {
            setError(true);
        });
    },
  })

  const handleSubmit = (e : any) => {
        e.preventDefault()
        setTarget(e.target)
        formik.handleSubmit();
  }

  return (
    <div className={styles.FormContainer}>
        <h3>{t("about:contact.header")}</h3>
        <form onSubmit={(e) => { e.preventDefault; handleSubmit(e);}}>
        <Input status={ formik.touched.name && Boolean(formik.errors.name) ?  "error" : undefined} name="name"  type="text" placeholder={t("about:contact.name")}
          onChange={(e)=>{formik.setFieldValue('name', e.target.value)}}
        ></Input>
        <div style={{color: 'red'}}>{formik.touched.name && formik.errors.name}</div>
        <div className={styles.flex}>
            <div><Input
             onChange={(e)=>{formik.setFieldValue('email', e.target.value)}}
             status={ formik.touched.email && Boolean(formik.errors.email) ?  "error" : undefined}
              placeholder={t("about:contact.email")} name="email" type="email">
                </Input>
                <div style={{color: 'red'}}>{formik.touched.email && formik.errors.email}</div>

                </div>
            <div><Input 
            status={ formik.touched.phone && Boolean(formik.errors.phone) ?  "error" : undefined}
            onChange={(e)=>{formik.setFieldValue('phone', e.target.value)}} placeholder={t("about:contact.phone")} name="phone" type="number"></Input>
                    <div style={{color: 'red'}}>{formik.touched.phone && formik.errors.phone}</div>

            </div>
        </div>
        <TextArea
        status={ formik.touched.quastion && Boolean(formik.errors.quastion) ?  "error" : undefined}
         onChange={(e)=>{formik.setFieldValue('quastion', e.target.value)}} placeholder={t("about:contact.quastion")} name="quastion" rows={4}/>
                 <div style={{color: 'red'}}>{formik.touched.quastion && formik.errors.quastion}</div>

         { !sent && <button type="submit" className={styles.Button}>{t("about:contact.send")}</button> }
         {sent && <div style={{color: 'blue', marginTop: '10px', fontSize: "20px"}}>{t("about:contact.sent")}</div>}
         {error && <div style={{color: 'red', marginTop: '10px', fontSize: "20px"}}>{t("about:contact.error")}</div>}
        </form>
    </div>
  );
};

export { FormConact };