import random

def select(field_id):
    # 인성 0, 기술 1~6
    field_list = ['personality_interview', 'embeded', 'ui-ux', 'database', 'security', 'cloud-service', 'bigdata']
    random_n = random.randint(1, 5)

    if field_id == 0:
        key = '{}/00{}.mp4'.format(field_id[0], field_list[random_n])
    else:
        key = 'job_interview/{}/00{}.mp4'.format(field_list[field_id], field_list[random_n])

    return key